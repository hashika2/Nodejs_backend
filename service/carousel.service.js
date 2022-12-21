exports.getCarousalData = (req, res) => {
    try{
        // need to get data from database
        if(req.query.slides == "1"){
            res.status(200).send({
                slides: [
                    {
                        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg",
                        title: "title1",
                        subTitle: "subTitle1"
                    }
                ]
            });
        }else{
            res.status(200).send({
                slides: [
                    {
                        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg",
                        title: "title1",
                        subTitle: "subTitle1"
                    },
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFYzhHAUCcjjlbxNRZaw5uQ07XOODf8bK86yh853tZwJvrvqxYOz3BkdMAcY2emSwqn8&usqp=CAU",
                        title: "title2",
                        subTitle: "subTitle2"
                    },
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mIYEysd-J9vbt0acfXh9X3LurwkNnRjMOCQwrBT0MsWQwHzrLCMN8lJs8OPop0VYmKA&usqp=CAU",
                        title: "title3",
                        subTitle: "subTitle3"
                    }
                ]
            });
        }
    }catch(err){
        res.status(500).send("Internel Server Error");
    }
};