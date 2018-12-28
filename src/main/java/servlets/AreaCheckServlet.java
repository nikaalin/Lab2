package servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


public class AreaCheckServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        try {
            request.setCharacterEncoding("UTF-8");
            double x = Double.parseDouble(request.getParameter("X"));
            double y = Double.parseDouble(request.getParameter("Y"));
            double r = Double.parseDouble(request.getParameter("R"));


            Point point = new Point(x, y, r);
            point.setIsInArea();

            Points list = (Points) request.getSession().getAttribute("MyPoints");

            list.add(point);


            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            out.println("<!DOCTYPE HTML> <html> <head> <meta charset='UTF-8'> <title>Points</title> <link href=\"css/styles111.css\" rel=\"stylesheet\"> " +
                    "            </head> <body><div class=\"title2\" id=\"header\">\n" +
                    "    Николаенкова А.А.  P3201  Вариант 18130\n" +
                    "</div>" +
                    "<div id=\"main2\">");
            out.println("<br> <table class='tab' align='center' cellspacing=\"1px\"> " +
                    "<tr><td><h3>X coord</h3></td><td><h3>Y coord</h3></td><td><h3>Radius R</h3></td><td><h3>Entrance</h3></td></tr>");

            for (int i = 0; i < list.size(); i++) {
                Point p = (Point) list.get(i);
                out.println("<tr>");
                out.println("<td>");
                out.println(p.getX());
                out.println("</td>");
                out.println("<td>");
                out.println(p.getY());
                out.println("</td>");
                out.println("<td>");
                out.println(p.getR());
                out.println("</td>");
                out.println("<td>");
                out.println(p.getIsInArea());
                out.println("</td>");
                out.println("</tr>");
            }

            out.println("</table> <a href=/Lab2><button class='button' style='text-align: center'>Return</button></a></div>" +
                    "<div class=\"title2\" id=\"footer\">\n" +
                    "Университет ИТМО<a href=\"https://se.ifmo.ru\" title=\"или не кафедра?\" target=\"_blank\">Кафедра ВТ</a>2018\n" +
                    "</div></body> </html>");
        } catch (Exception e) {
            e.printStackTrace();
            //response.sendRedirect("/Lab2");
        }
    }
}