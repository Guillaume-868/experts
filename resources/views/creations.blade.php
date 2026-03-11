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

    <main class="main-creations">
        <section class=" banner banner-creations" style="background-image: url('{{ asset('images/fake-news.jpg') }}');">
            <h1 class="title-primary">Créations</h1>
        </section>

        <section class="content">
            <h2 class="title-secondary">Feat skateshop</h2>
            <p> Des créations faites à la main par un passionné de skateboard représentés par un côté fantaisie.</p>
        </section>


        <section class="skate-board" style="background-image: url('{{ asset('images/cloud.jpg') }}');">

            <div class="skate-container">
                <img src="{{ asset('images/skate-strange.png') }}" alt="skate-stranger" class="skate skate-top">
                <img src="{{ asset('images/skate-vampire.png') }}" alt="skate-vampire" class="skate skate-down">
            </div>
        </section>

        <section class="gallery" style="background-image: url('{{ asset('images/colors.jpg') }}');">
            <div class="box-container">
                <div class="gallery-container">
                    <img src="{{ asset('images/eagle.png') }}" alt="eagle" class="t-shirt">
                    <img src="{{ asset('images/tree.png') }}" alt="tree-spring" class="t-shirt">
                    <img src="{{ asset('images/monkey.png') }}" alt="monkey" class="t-shirt">
                    <img src="{{ asset('images/tree-second.png') }}" alt="tree-autumn" class="t-shirt">
                </div>
            </div>
        </section>

    </main>
    <x-footer></x-footer>

</body>

</html>
