  package Controler;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/servlet2")
public class servlet2 extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Constructor
    public servlet2() {
        super();
    }

    // doGet method to handle GET requests
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }

    // doPost method to handle POST requests
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }

    // Method to process the request and generate the response
    private void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Establish the database connection and perform query in try-with-resources
        try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/ajp", "ajp", "ajp");
             Statement stm = con.createStatement();
             ResultSet rs = stm.executeQuery("SELECT * FROM user")) {

            // Get metadata about the result set (column names)
            ResultSetMetaData rsmd = rs.getMetaData();

            // Provide a link to add new user
            out.println("<a href='/Practical3/Servlet_1'>Add New User</a><br><br>");

            // Create an HTML table to display the data
            out.println("<table align='center' border='2'>");
            out.println("<tr>");

            // Loop through the column names and print them as table headers
            for (int i = 1; i <= rsmd.getColumnCount(); i++) {
                out.println("<th>" + rsmd.getColumnName(i).toUpperCase() + "</th>");
            }
            out.println("</tr>");

            // Loop through the result set and display each row in the table
            while (rs.next()) {
                out.println("<tr>");
                out.println("<td>" + rs.getString(1) + "</td>");
                out.println("<td>" + rs.getString(2) + "</td>");
                out.println("<td>" + rs.getString(3) + "</td>");
                out.println("<td>" + rs.getString(4) + "</td>");
                out.println("</tr>");
            }

            // Close the table after the loop
            out.println("</table>");
        } catch (SQLException e) {
            // Handle SQL exception and display the error message
            out.println("<p style='color:red;'>Error: " + e.getMessage() + "</p>");
        } finally {
            out.close();
        }
    }
}
