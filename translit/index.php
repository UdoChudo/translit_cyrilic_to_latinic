<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Транслитерация</title>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/copyToClipboard.js"></script>
    <script type="text/javascript" src="js/translit.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/popper.min.js"></script>
    <script type="text/javascript" src="js/notify.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

</head>

<body>
    <div class="main-box">
        <table class="table table-dark">
            <tbody>
                <tr>
                    <td class="td-name"><p>Транслитерация: кириллицы -&gt; латиницу</p></td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="translit" value="" placeholder="Введите текст для транслитерации" size="100"><br>
                    </td>
                    <tr>
                    <td>
                        <input onclick="translit();" type="submit" value="Транслитировать!" class="translit-button"  >
                    </td>
                </tr>
                    <td>
                        <input type="text" name="result" id="outputText" placeholder="Результат транслитерации будет выведен сюда" size="100">
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="cpToCpBoard"> <button onclick="copyToClipboard();" class="copyToClipboard-button">Скопировать в буфер</button></div>
                    </td>
                </tr>
            </tbody>

        </table>

    </div>
</body>
</html>