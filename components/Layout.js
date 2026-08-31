export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">{children}</div>
      <style jsx>{`
        .wrapper {
          max-width: 750px;
          //margin: 0 auto;
          margin-left: 1%;
          padding: 1.5rem;
        }
      `}</style>
      <style jsx global>{`
        // * {
        //   margin: 0;
        //   padding: 0;
        // }

        :root {
          --site-color: royalblue;
          --divider-color: rgba(0, 0, 0, 0.4);
        }

        html {
          font: 100%/1.5 system-ui;
          margin-left: 20px;
        }
        a {
          color: inherit;
          text-decoration-color: var(--divider-color);
          text-decoration-thickness: 2px;
        }

        a:hover {
          color: var(--site-color);
          text-decoration-color: currentcolor;
        }

        h1,
        p {
          margin-bottom: 1em;
        }

        code {
          font-family: 'Menlo';
        }
      `}</style>
    </> 
  )
}
