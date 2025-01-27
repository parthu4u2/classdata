import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/servlet1")
public class servlet1 extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Constructor
    public servlet1() {
        super();
    }

    // doGet method (not used in this case but included for completeness)
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // You can implement this method if needed
    }

    // doPost method to handle POST request
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }

    // process method to handle the database insertion logic
    private void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String userName = request.getParameter("userName");
        String birthDate = request.getParameter("birthDate");
        String emailid = request.getParameter("emailid");
        String contactNo = request.getParameter("contactNo");

        // Get the PrintWriter to send a response to the client
        PrintWriter out = response.getWriter();

        try {
            // Register MySQL driver
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());

            // Establish database connection
            try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/ajp", "ajp", "ajp");
                 Statement stm = con.createStatement()) {

                // Correct the SQL query syntax and ensure values are properly escaped
                String query = "INSERT INTO user (userName, birthDate, emailid, contactNo) " +
                               "VALUES ('" + userName + "', '" + birthDate + "', '" + emailid + "', '" + contactNo + "')";

                // Execute the query and check if the data was inserted
                if (stm.executeUpdate(query) > 0) {
                    // Redirect to another servlet on successful insert
                    response.sendRedirect("/Practical3/Servlet_2");
                } else {
                    // In case of failure, print error message
                    out.println("<font color='#000'>Unable to Enter Data</font>");
                }
            } catch (SQLException e) {
                // Handle SQL exceptions
                out.println("<font color='#e00'>Error: " + e.getMessage() + "</font>");
            }
        } catch (SQLException e) {
            // Handle JDBC driver registration or connection issues
            out.println("<font color='#e00'>Driver Registration Error: " + e.getMessage() + "</font>");
        } finally {
            out.close();
        }
    }
}
