import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>
          죄송합니다. <br />
          요청하신 페이지를 찾을 수 없습니다.
        </h1>
        <p>
          방문하시려는 페이지의 주소가 잘못 입력되었거나,
          <br />
          페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
          <br />
          <br />
          입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다
        </p>
      </main>
    </>
  );
}

export default ErrorPage;
