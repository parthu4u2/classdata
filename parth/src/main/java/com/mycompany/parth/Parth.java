/*
 * Connectivity
 */

//  package com.mycompany.parth;
 import java.sql.*;
 import java.util.*;
 public class Parth {
 
     public static void main(String[] args) {
         Scanner scan=new Scanner(System.in);

         System.out.println("Enter User Name");
         String un=scan.next();

         System.out.println("Enter Password");
         String pw=scan.next();

         try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con=DriverManager.getConnection("jdbc.mysql://localhost:3306/ajp","root","");

            Statement stn=con.createStatement();
             String query = "SELECT data FROM credit WHERE username='" + un + "' AND password='" + pw + "'";
            ResultSet rs=stn.executeQuery(query);

            if (rs.next()) {
                System.out.println("Login Succsesfull Data"+rs.getString("data"));
            } else {
                System.out.println("Login Failed");
            }

            rs.close();
            stn.close();
            con.close();
         } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver Not Found,Add MYSQL.JDBC dependency");
            e.printStackTrace();
          }catch(SQLException e){
            System.out.println("SQL Exception accurend."+e.getMessage());
            e.printStackTrace();
          }
      }
 }
 
