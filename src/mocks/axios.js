const MockResponse = {
    data: {
        results:{
         name:"test",
         height:20,
        }
        
    }
}

export default {
    get: jest.fn().mockResolvedValue()
}