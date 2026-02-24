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

    <!-- OVERLAY -->
    <div class="menu-overlay"></div>

    <main class="primary">
        <section class="presentation" style="background-image: url('{{ asset('images/stranger-things.jpg') }}');">
            <h1>O3 Aventura</h1>
        </section>

        <section class="content">
            <h2>Bienvenue chez O3 Aventura</h2>
            <p>O3 Aventura est une entreprise spécialisée dans la création d'expériences immersives et de jeux
                d'évasion. Nous sommes passionnés par l'idée de transporter les joueurs dans des mondes fantastiques et
                de leur offrir des aventures inoubliables.</p>
            <p>Notre équipe de créateurs talentueux travaille sans relâche pour concevoir des scénarios captivants, des
                décors impressionnants et des énigmes stimulantes. Que vous soyez un amateur de jeux d'évasion ou
                simplement à la recherche d'une expérience unique, O3 Aventura a quelque chose à offrir à tout le monde.
            </p>
        </section>
    </main>
</body>

</html>
