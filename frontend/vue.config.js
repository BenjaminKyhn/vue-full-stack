//This fixes the CORS error in the frontend
module.exports = {
    devServer: {
        proxy: 'http://localhost:8000'
    }
}