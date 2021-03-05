const [ball, setball] = useState([])

  useEffect(()=>{
   const getBall = async ()=>{
     const ballFromApi = await fetchball()
     setball(ballFromApi.magic.answer)
   }
      getBall()
},[])

const fetchball = async ()=>{
  const user = '1';
  const res = await fetch('https://8ball.delegator.com/magic/JSON/' + user)
  const data = await res.json();
  console.log(data)
  return(data)
}

export default Answer;