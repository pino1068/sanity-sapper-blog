export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fda964c6f1fb02b4427ca1b',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-or8zyzgp',
                  apiId: 'f8f42de0-fecc-4861-9004-53b6c4407cb2'
                },
                {
                  buildHookId: '5fda964c5502cf2d9b4747e3',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ndew63qk',
                  apiId: 'b28a7331-244d-43ce-b4c4-8758ac4afcdd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pino1068/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ndew63qk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
