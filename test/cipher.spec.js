// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cipher from '../src/cipher';

describe('cipher', () => {

  test('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    test('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    test('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      //completa este test!
      //arrange
      let textCipher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let offset = 33;

      //act
      let resultCipher = cipher.encode(textCipher,offset);

      //assert
      expect(resultCipher).toBe("HIJKLMNOPQRSTUVWXYZABCDEFG");

    });

    
  });

  describe('cipher.decode', () => {

    test('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    test('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      //completa este test!
       //arrange
       let textDecipher = "HIJKLMNOPQRSTUVWXYZABCDEFG";
       let offset = 33;
 
       //act
       let resultCipher = cipher.decode(textDecipher,offset);
 
       //assert
       expect(resultCipher).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

  });

});
