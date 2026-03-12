<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O3 Aventura</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <x-header></x-header>

    <!-- OVERLAY -->
    <div class="menu-overlay"></div>

    <main class="primary">
        <section class="banner banner-home" style="background-image: url('{{ asset('images/stranger-things.jpg') }}');">
            <h1 class="title-primary">O3 Aventura</h1>
        </section>

        <div class="home-sections">

            <section class="content">
                <h2 class="title-secondary">Bienvenue chez O3 Aventura</h2>
                <p>O3 Aventura permet aux personnes travaillant chez O3 Experts de partager ses créations au travers de
                    déssins, les sujets sont libres, l'idée principale étant de laisser libre cours à l'imagination et à
                    la
                    créativité de chacun.</p>
                <p> Il est possible de démontrer ses talents pour simplement faire plaisir ou encore déssiner dans le
                    cadre
                    d'un projet qui pourrait s'appliquer sur de la broderie, un skateboard et d'autres supports.
                </p>
                <p> Autant dire, que l'on a du pain sur la planche.
            </section>


            <section class="carousel-wrapper">
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

                <!-- Pagination dots -->
                <div class="carousel-dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </section>
        </div>
    </main>
    <x-footer></x-footer>

</body>

</html>
