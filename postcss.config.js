module.exports = { 
    plugins: { 
        'autoprefixer': {
            overrideBrowserslist: [ 
                "last 1 version",
                "> 1%",
                "ie 10"
            ]
        } 
    }
}