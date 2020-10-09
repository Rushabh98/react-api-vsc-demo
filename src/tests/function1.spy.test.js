test("illustrate spy", () => {
    // arrange
    const greeter = require('../function1.js')

    const getFullNameSpy = jest.spyOn(greeter, 'getFullName')
    
    // act
    const result = greeter.greet("aman", "kumar")

    // assert
    expect(getFullNameSpy).toHaveBeenCalled()
    expect(result).toBe("Hello! aman kumar")
    expect(getFullNameSpy).toHaveBeenCalledWith("aman","kumar")

})
