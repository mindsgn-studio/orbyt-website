const handler = async (req: any, res: any) => {
  try {
    fetch(`https://theforexapi.com/api/latest`)
    .then((response)=>{  
        return response.json()
    })
    .then((response)=>{  
        console.log(response)
        return res.status(200).json({ });
    })
    .catch((error)=>{
        return res.status(500).json({ });
    })
  } catch (error: any) {
    return res.status(500).json({ });
  }
};

export default handler;