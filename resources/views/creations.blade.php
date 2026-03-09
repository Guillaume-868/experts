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


    </main>
    <x-footer></x-footer>

</body>

</html>
