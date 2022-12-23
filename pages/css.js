
const YOUTUBE_PLAYLIST_API= ' https://www.googleapis.com/youtube/v3/playlistItems';


export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const data = await res.json();
  return{
    props:{
      data
    }
  }
}


export default function Css({data}) {
  return (
    <div className="youtube">
      <h2>LEARN CSS</h2>
      <div className="sub-youtube">
        {data.items.map((item) =>{
          const {id, snippet = {}}=item;
          const {title, thumbnails = {}, resourceId} = snippet;
          const {medium = {}} = thumbnails
          return(
            <div key={id}>
              <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} className="you-link">
              <h4>{title}</h4>
              <p>
                <img width={medium.width} height={medium.height} src={medium.url} alt="" />
              </p>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
