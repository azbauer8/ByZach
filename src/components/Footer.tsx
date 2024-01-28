const Footer = () => {
  return (
    <footer>
      <hr className="mb-8 dark:border-zinc-800" />

      <div className="flex justify-center">
        <a
          href="https://github.com/azbauer8/ByZach"
          className="group inline-flex"
        >
          <p className="underline decoration-zinc-150 decoration-2 underline-offset-2 group-hover:decoration-zinc-450 dark:decoration-zinc-450 dark:group-hover:decoration-zinc-150">
            By Zach Bauer, {new Date().getFullYear()}
          </p>
        </a>
      </div>
    </footer>
  )
}

export default Footer
