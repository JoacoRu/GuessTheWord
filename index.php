<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/modal.css">
    <title>Home</title>
</head>
<body>
    <?php include_once('includes/header.php'); ?>
    <section>
        <article>
            <div class="ventanaModal">
                <div class="modal">
                    <form method="post">
                        <input type="text" name="usuario">
                        <input type="password" name="password">
                        <input type="checkbox" name="recordar">
                        <button type="submit">Loguear</button>
                        <a href="javascript:deploy('hidden')">Cerrar</a>
                    </form>
                </div>
            </div>
        </article>
    </section>
    <script src="js/modal.js"></script>
</body>
</html>