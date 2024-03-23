import request from 'supertest';
import app from './config/server.js';

describe('Teste  de requisição para a API: /api/manipulacao-string', () => {

    test('verifica palindromo 01', async () => {

        
        const response = await request(app)
            .post('/api/manipulacao-string')
            .send({"texto": "banana"})

        expect(response.status).toBe(200);

        const resultado = response.body;

        expect(resultado).toHaveProperty('palindromo');
        expect(typeof resultado.palindromo).toBe('boolean');
        expect(resultado.palindromo).toBe(false);
        
        expect(resultado).toHaveProperty('ocorrencias_caracteres');
        expect(typeof resultado.ocorrencias_caracteres).toBe('object');
        expect(resultado.ocorrencias_caracteres).toEqual({
            b: 1,
            a: 3,
            n: 2
        });

    });

    test('verifica palindromo 02', async () => {

        
        const response = await request(app)
            .post('/api/manipulacao-string')
            .send({"texto": "helbert"})

        expect(response.status).toBe(200);

        const resultado = response.body;

        expect(resultado).toHaveProperty('palindromo');
        expect(typeof resultado.palindromo).toBe('boolean');
        expect(resultado.palindromo).toBe(false);
        
        expect(resultado).toHaveProperty('ocorrencias_caracteres');
        expect(typeof resultado.ocorrencias_caracteres).toBe('object');
        expect(resultado.ocorrencias_caracteres).toEqual({
            h: 1,
            e: 2,
            l: 1,
            b: 1,
            r: 1,
            t: 1
        });

    });

    test('verifica palindromo 03', async () => {
        
        const response = await request(app)
            .post('/api/manipulacao-string')
            .send({"texto": "aibofobia"})

        expect(response.status).toBe(200);

        const resultado = response.body;

        expect(resultado).toHaveProperty('palindromo');
        expect(typeof resultado.palindromo).toBe('boolean');
        expect(resultado.palindromo).toBe(true);
        
        expect(resultado).toHaveProperty('ocorrencias_caracteres');
        expect(typeof resultado.ocorrencias_caracteres).toBe('object');
        expect(resultado.ocorrencias_caracteres).toEqual({
            a: 2,
            i: 2,
            b: 2,
            o: 2,
            f: 1
        });

    });

});

describe('Teste  casos de borda da requisição para a API: /api/manipulacao-string', () => {

    test('informou parametro vazio', async () => {

        
        const response = await request(app)
            .post('/api/manipulacao-string')
            .send({"texto": null})

        expect(response.status).toBe(400);

        const resultado = response.body;
        expect(resultado).toHaveProperty('error');

    });


});
