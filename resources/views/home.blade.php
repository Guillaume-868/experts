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
            <h1 class="title-primary">O3 Aventura</h1>
        </section>

        <section class="content">
            <h2 class="title-secondary">Bienvenue chez O3 Aventura</h2>
            <p>O3 Aventura permet aux personnes travaillant chez O3 Experts de partager ses créations au travers de
                déssins, les sujets sont libres, l'idée principale étant de laisser libre cours à l'imagination et à la
                créativité de chacun.</p>
            <p> Il est possible de démontrer ses talents pour simplement faire plaisir ou encore déssiner dans le cadre
                d'un projet qui pourrait s'appliquer sur de la broderie, un skateboardet d'autres supports.
            </p>
            <p> Autant dire que l'on a du pain sur la planche.
        </section>

        <div class="carousel-wrapper">
            <h2 class="title-secondary">Vos idées prennent vie</h2>
            <div class="carousel-track">
                <div class="carousel-slide">
                    <img src="{{ asset('images/crocodiles.jpg') }}" alt="crocodile">
                </div>
                <div class="carousel-slide">
                    <img src="{{ asset('images/king.jpg') }}" alt="king">
                </div>
                <div class="carousel-slide">
                    <img src="{{ asset('images/girl.jpg') }}" alt="girl">
                </div>
            </div>

            <button class="carousel-prev" aria-label="Slide précédente">❮</button>
            <button class="carousel-next" aria-label="Slide suivante">❯</button>
        </div>
    </main>

    <footer class="footer">
        <nav class="footer-social" aria-label="Réseaux sociaux">
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener">
                <img src="{{ asset('images/x.svg') }}" alt="X">
            </a>
            <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener">
                <i class="fa-brands fa-facebook"></i>
            </a>
        </nav>

        <p class="footer-copy">© 2026 — Ton site</p>
    </footer>
</body>

</html>
