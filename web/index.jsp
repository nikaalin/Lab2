<%@ page import="servlets.Points" %>



<%@ page import="java.io.IOException" %>

<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>
<jsp:useBean id="MyPoints" class="servlets.Points" scope="session"/>
<html>
<head>
    <title>Lab2.0</title>
    <link rel="stylesheet" type="text/css" href="css/styles111.css"/>
    <script type="text/javascript" src="js/cat.js"></script>
    <script type="text/javascript" src="js/graph.js"></script>
    <script type="text/javascript" src="js/validation.js"></script>
</head>
<%--<body onload="start()">--%>
<body onload="draw('graph',null)">
<div class="title1" id="header">
    Николаенкова А.А.  P3201  Вариант 18130
</div>
<div id="main1">
    <%--<div id="inmain">--%>
    <div class="form">

        <form name="form" id = "form" method="get" action="Lab2_0">
            <div id="chooseXY">
                Задайте параметры точки:
                <br>

                <label for="x">
                    X =
                </label>
                <input type="text" class="choose" name="X" id="x" onkeydown="validatePresssymbols('X')" placeholder="(-5..3)">

                <label for="y">
                    Y =
                </label>
                <input type="text" class="choose" name="Y" id="y" onkeydown="validatePresssymbols('Y')" placeholder="(-5..3)">
            </div>
            <div class="alertMsg" id="errY">
                Не отчаивайтесь, на клавиатуре<br> не так уж много кнопок.
            </div>
            <div id="chooseR">
                Задайте радиус области:
                <br>
                <label for="r">
                    R =
                </label>
                <input type="text" class="choose" name="R" id="r" onkeydown="validatePresssymbols('R')" placeholder="(1..4)">
            </div>
            <div class="alertMsg" id="errR">
                Введите значение R<br>в диапазоне (1; 4)
            </div>
            <div id="button">
                <input type="button" class="button" value="Проверить" name="button" onclick="validateForm()">
            </div>
        </form>

    </div>
    <div id="canv">
        <canvas height="400" width="400" id="graph" onclick="interract()"
                class="graph"></canvas>
    </div>

</div>
<div class="title1" id="footer">
    Университет ИТМО <a href="https://se.ifmo.ru" title="или не кафедра?"> Кафедра ВТ </a> 2018
</div>
</body>
</html>
