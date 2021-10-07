export default function DisplayGitHub({ data }) {
  if (data) {
    return (
      <div className="card" style={{ margin: "20px 0" }}>
        <a href={'https://github.com/'+ data.login}>
          <img
            className="img-fluid rounded"
            src={data.avatar_url}
            alt={data.login}
            title={data.login}
            max-height="40vw" />
        </a>
      <div className="card-body">
          <h5 className="card-title">{data.login}</h5>
          <p className="card-title">{data.bio}</p>
        </div>
      </div>
    );
  } else
    return (
      <>
        <h1>No Data Found</h1>
      </>
    );
}
