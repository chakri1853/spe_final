const rewire = require("rewire")
const Menu = rewire("./Menu")
const isActive = Menu.__get__("isActive")
// @ponicode
describe("isActive", () => {
    test("0", () => {
        let callFunction = () => {
            isActive({ location: { pathname: "www.scielo.br" } }, ".")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            isActive({ location: { pathname: "internal.ip" } }, "/path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            isActive({ location: { pathname: "localhost" } }, ".")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            isActive({ location: { pathname: "10.10.10.10" } }, "path/to/folder/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            isActive({ location: { pathname: "internal.ip" } }, "path/to/folder/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            isActive(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
