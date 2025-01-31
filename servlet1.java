  package Controler;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
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

        // Database connection setup
        try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/ajp", "ajp", "ajp")) {
            
            // PreparedStatement to prevent SQL Injection
            String query = "INSERT INTO user (userName, birthDate, emailid, contactNo) VALUES (?, ?, ?, ?)";
            try (PreparedStatement pstmt = con.prepareStatement(query)) {
                // Set parameters for the query
                pstmt.setString(1, userName);
                pstmt.setString(2, birthDate);
                pstmt.setString(3, emailid);
                pstmt.setString(4, contactNo);

                // Execute the query and check if data was inserted
                int result = pstmt.executeUpdate();
                if (result > 0) {
                    // Redirect to another servlet on successful insert
                    response.sendRedirect("/Practical3/Servlet_2");
                } else {
                    // In case of failure, print error message
                    out.println("<font color='#000'>Unable to Enter Data</font>");
                }
            }
        } catch (SQLException e) {
            // Handle SQL exceptions
            out.println("<font color='#e00'>Error: " + e.getMessage() + "</font>");
        } finally {
            out.close();
        }
    }
}
 
