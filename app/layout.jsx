import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "SharedPrompt",
  description: "Discover & Share AI prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* <Provider/> */}
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
