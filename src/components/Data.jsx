const datas = 
    {
        name:'root',
        isFolder:true,
        items:[
            {
                name:'public',
                isFolder:true,
                items:[
                    {
                        name:'public nested 1',
                        isFolder:true,
                        items:[
                    {
                        name:'index.html',
                        isFolder:false
                    },
                    {
                        name:'hai.html',
                        isFolder:false
                    }
                        ]
                },
                {
                    name:'public nested file',
                    isFolder:false
                }
                ]
            },{
                name:'src',
                isFolder:true,
                items:[
                    {
                        name:'App.jsx',
                        isFolder:false
                    },
                    {
                        name:'index.jsx',
                        isFolder:false
                    },
                    {
                        name:'style.css',
                        isFolder:false
                    }
                ]
            },
            {
            name:'package.json',
            isFolder:false
            }
        ]
    };

export default datas;