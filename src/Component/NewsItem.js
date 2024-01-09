
const NewsItem = (props) => {

  let { title, descrpition, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card my-2" style={{ width: "18rem" }} >
        <div style={{ display: "flex", justifyContent: 'flex-end', position: 'absolute', right: '0' }}> <span className=" badge rounded-pill bg-danger">
          {source}
        </span>
        </div>
        <img src={imageUrl} className="card-img-top" alt={imageUrl} />
        <div className="card-body" style={props.mystyle}>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{descrpition}...</p>
          <p className="card-text"><small className="text-body-secondary">{author} </small></p>
          <p className="card-text"><small className="text-body-secondary">{new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-outline-info btn-sm ">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem;