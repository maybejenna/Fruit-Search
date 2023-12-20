describe("fruitKeyWords array", function() {
    it("should contains a predefined list of fruits", function() {
        expect(fruitKeyWords).toContain('Apple');
        expect(fruitKeyWords).toContain('Banana');
        expect(fruitKeyWords.length).toBeGreaterThan(10);
    });
});

describe("showSuggestions function", function() {
    it("should populates the suggestions element with fruit names", function() {
        let testResults = ['Apple', 'Apricot'];
        showSuggestions(testResults);
        expect(document.querySelector('.suggestions').innerHTML).toContain('<li onclick="useSuggestion(event)">Apple</li>');
        expect(document.querySelector('.suggestions').innerHTML).toContain('<li onclick="useSuggestion(event)">Apricot</li>');
    });
});

describe("useSuggestion function", function() {
    it("should updates input and image display on suggestion click", function() {
        let mockEvent = { target: { textContent: 'Apple' } };
        useSuggestion(mockEvent);

        expect(input.value).toBe('Apple');
    });
});