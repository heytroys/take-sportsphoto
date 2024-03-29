'use-strict';
{
    const $hdr_header = document.getElementById('hdr_header');
    $hdr_header.insertAdjacentHTML('afterbegin' , `
    <header id="header" class="p-3 mb-4">
    <div class="header-container d-flex justify-content-between align-items-center">
      <div class="page-title">
      <h1><a class="fs-1 text-dark text-decoration-none p-2" href="index.html">Sports Photo</a></h1>
    </div>
    <nav>
    <ul id="nav" class="sports-list d-flex list-unstyled pt-2">
    <li class="pe-2"><a href="index.html" class="fs-4 text-dark text-decoration-none">top</a></li>
      <li class="pe-3"><a href="#" class="sub-text fs-3 text-dark text-decoration-none">baseball</a>
      <ul class="list-unstyled">
        <li class="my-4"><a class="fs-6 text-dark text-decoration-none" href="events/baseball-tiger24-1-op.html">阪神タイガース
          <br>1軍オープン戦<br>
          2024</a></li>
        <li class="my-4"><a class="fs-6 text-dark text-decoration-none" href="events/th-other-baseball24-1-op.html">阪神以外
          <br>1軍オープン戦
          <br>2024</a></li>
        </ul>
      </li>
      <li class="pe-3"><a href="#" class="sub-text fs-3 text-dark text-decoration-none">volleyball</a>
        <ul class="list-unstyled">
          <li class="my-4"><a class="sub-text fs-6 text-dark text-decoration-none" href="events/jtmave23.html">JTマーヴェラス
            <br>2023~24</a></li>
          </ul>
        </li>
        <li class="pe-3"><a href="#" class="sub-text fs-3 text-dark text-decoration-none">figureskate</a>
          <ul class="list-unstyled">
            <li class="my-4"><a class="sub-text fs-6 text-dark text-decoration-none" href="events/zenja-figskate23.html">2023全日本
              <br>フィギアスケート<br>
              選手権</a></li>
            </ul>
          </li>
      <li class="pe-2"><a href="events/prof.html" class="fs-3 text-dark text-decoration-none">profile</a></li>
    </ul>
  </nav>
    <div class="burger ps-2 pe-2 pt-2 pb-1">
      <div class="line1 fw-normal mb-2"></div>
      <div class="line2 fw-normal mb-2"></div>
      <div class="line3 fw-normal mb-2"></div>
    </div>
  </div>
  </header>`);
}

{
    const $hdr_footer = document.getElementById('hdr_footer');
    $hdr_footer.insertAdjacentHTML('afterbegin' , `
    <!-- footer -->
        <footer id="footer" class="text-center text-dark pt-2 pb-2">
          <p>&copy;Take Sports Photo</p>
        </footer>`);
}

