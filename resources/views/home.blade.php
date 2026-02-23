<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O3 Aventura</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <header class="home">
        <div class="left"></div>

        <div class="center">
            <img src="{{ asset('images/logo-aventura-o3.png') }}" alt="Logo" class="logo">
        </div>

        <div class="right">
            <img src="{{ asset('images/menu-white.png') }}" alt="Menu" class="burger">
            <img src="{{ asset('images/close.png') }}" alt="Close" class="burger-close">
        </div>

        <nav class="nav">
            <ul>
                <li><a href="{{ route('home') }}" class="menu-link">Accueil</a></li>
                <li><a href="#" class="menu-link">Nos créations</a></li>
                <li><a href="#" class="menu-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="primary">
        <section class="presentation" style="background-image: url('{{ asset('images/stranger-things.jpg') }}');">
            <h1>O3 Aventura</h1>
        </section>
    </main>
</body>

</html>
