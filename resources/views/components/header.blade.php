<header class="home">
    <div class="left"></div>

    <div class="center">
        <a href="{{ route('home') }}">
            <img src="{{ asset('images/logo-aventura-o3.png') }}" alt="Logo">
        </a>
    </div>

    <div class="right">
        <img src="{{ asset('images/menu-white.png') }}" alt="Menu" class="burger">
        <img src="{{ asset('images/close.png') }}" alt="Close" class="burger-close">
    </div>

    <nav class="nav">
        <ul>
            <li><a href="{{ route('home') }}" class="menu-link">Accueil</a></li>
            <li><a href="#" class="menu-link">Nos créations</a></li>
            <li><a href="{{ route('contact') }}" class="menu-link">Contact</a></li>
        </ul>
    </nav>
</header>
