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

    <main class="main-contact">
        <section class="presentation" style="background-image: url('{{ asset('images/contact.jpg') }}');">
            <h1 class="title-primary">Contact</h1>
        </section>

        <section class="form">
            <form action="/send-message" method="POST" class="contact-form" novalidate>
                @csrf
                <h2 class="title-secondary">Contactez-nous</h2>

                <!-- LastName -->
                <label for="name">Nom *</label>
                <input type="text" id="name" name="name" placeholder="Nom" required>

                <!-- FirstName-->
                <label for="firstname">Prénom *</label>
                <input type="text" id="firstname" name="firstname" placeholder="Prénom" required>

                <!-- Email -->
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" placeholder="o3-avenura@outlook.fr" required>

                <!-- Subject -->
                <label for="subject">Sujet *</label>
                <input type="text" id="subject" name="subject" placeholder="Objet de votre message" required>

                <!-- Message -->
                <label for="message">Message *</label>
                <textarea id="message" name="message" rows="10" placeholder="Écrivez votre message ici..." required></textarea>

                <!-- Consent RGPD -->
                <div class="consent">
                    <input type="checkbox" id="rgpd" name="rgpd" required>
                    <label for="rgpd">J'accepte que mes informations soient utilisées pour répondre à ma
                        demande.</label>
                </div>

                <!-- Button submit -->
                <button type="submit" id="submit">Envoyer</button>
            </form>
        </section>
    </main>


    <x-footer></x-footer>

</body>

</html>
