<script>
  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<div>
  <div>
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <a
          class="text-2xl font-semibold md:text-2xl hover:text-syntax.hover"
          href="/"
          >Homepage
        </a>
        <!-- Mobile menu button -->
        <div
          on:click={toggleNavbar}
          on:keypress={toggleNavbar}
          class="flex md:hidden"
        >
          <button
            type="button"
            class="hover:text-syntax.hover hover:bg-ui.line"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
          ? 'flex'
          : 'hidden'}"
      >
        <a class="hover:text-syntax.hover" href="/feed">Feed</a>
        <a class="hover:text-syntax.hover" href="/about">About</a>
        <form
          class="flex items-center space-x-2 border-2 border-syntax.hover rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-gray-800"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            class="w-full outline-none bg-zinc-900"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    </nav>
  </div>
</div>