function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/dikokartiko"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
          My Portofolio
        </a>
        .
        <a
          href="https://www.linkedin.com/in/dicco-suryo-kartiko-a00b98215/"
          target="__blank"
          className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
          Dicco
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
