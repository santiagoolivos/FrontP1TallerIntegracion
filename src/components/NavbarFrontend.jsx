const NavbarFrontend = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Grupo 7</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
    
            <li class="nav-item">
              <a class="nav-link" href="/bodegas-stocks">Bodegas y Stocks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ordenes">Ordenes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/facturas">Facturas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavbarFrontend;
