export const Shimmer = () => {
  return (
    <div className="restraunt-list">
       {Array(12).fill(" ").map( (e,index)=> (<div key={index} className="shimmer"></div>) )}
    </div>
  )
}
