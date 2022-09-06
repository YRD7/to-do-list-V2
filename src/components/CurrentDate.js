
const CurrentDate = () => {
  return (
    <div>Created On:-{
        data
        }</div>
  )
}
var date = new Date();
var data=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()
export default CurrentDate