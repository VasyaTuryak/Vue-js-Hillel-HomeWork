<template>
  <div class="container-fluid ms-3 mt-3">
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <hr>
    <div class="d-flex flex-row mb-5">
      <nav>
        <RouterLink to="/" class="me-5">Go to Home</RouterLink>
        <RouterLink to="/articleList" class="me-5">Article List</RouterLink>
      </nav>
    </div>
      <main>
        <RouterView />
      </main>
  </div>
</template>


