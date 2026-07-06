import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <nav style={{ marginBottom: "24px" }}>
        <button onClick={() => setPage("home")}>首頁</button>{" "}
        <button onClick={() => setPage("blog")}>內頁</button>{" "}
        <button onClick={() => setPage("post")}>文章頁</button>
      </nav>

      {page === "home" && (
        <>
          <h1>首頁</h1>
          <p>這裡是首頁內容。</p>
        </>
      )}

      {page === "blog" && (
        <>
          <h1>內頁</h1>
          <p>這裡是部落格列表。</p>
        </>
      )}

      {page === "post" && (
        <>
          <h1>文章頁</h1>
          <h2>文章標題</h2>
          <p>文章內容……</p>
        </>
      )}
    </div>
  );
}