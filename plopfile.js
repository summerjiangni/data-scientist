module.exports = function (plop) {
    plop.setGenerator('article', {
        description: 'article',
        prompts: [
            {
                type: 'input',
                name: 'charpter',
                message: 'charpter please',
            },
            {
                type: 'input',
                name: 'article',
                message: 'article please',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'docs/{{charpter}}/{{article}}.md',
                templateFile: 'templates/article.hbs',
                abortOnFail: false,
                skipIfExists: true,
                force: false,
            },
        ],
    });
};
