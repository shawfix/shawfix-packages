// eslint-disable-next-line @typescript-eslint/no-require-imports
const compareFunc = require('compare-func');

module.exports = {
  writerOpts: {
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    groupBy: 'type',
    noteGroupsSort: 'title',
    notesSort: compareFunc,
    transform: (commit, context) => {
      let discard = true;
      const issues = [];

      commit.notes.forEach((note) => {
        note.title = 'BREAKING CHANGES';
        discard = false;
      });
      if (commit.type === 'feat') {
        commit.type = '✨ Features | 新功能';
      } else if (commit.type === 'fix') {
        commit.type = '🐛 Bug Fixes | Bug 修复';
      } else if (commit.type === 'perf') {
        commit.type = '⚡ Performance Improvements | 性能优化';
      } else if (commit.type === 'revert' || commit.revert) {
        commit.type = '⏪ Reverts | 回退';
      } else if (discard) {
        return;
      } else if (commit.type === 'docs') {
        commit.type = '📝 Documentation | 文档';
      } else if (commit.type === 'style') {
        commit.type = '💄 Styles | 风格';
      } else if (commit.type === 'refactor') {
        commit.type = '♻ Code Refactoring | 代码重构';
      } else if (commit.type === 'test') {
        commit.type = '✅ Tests | 测试';
      } else if (commit.type === 'build') {
        commit.type = '👷‍ Build System | 构建';
      } else if (commit.type === 'ci') {
        commit.type = '🔧 Continuous Integration | CI 配置';
      } else if (commit.type === 'chore') {
        commit.type = '🎫 Chores | 其他更新';
      }

      if (commit.scope === '*') {
        commit.scope = '';
      }

      if (typeof commit.hash === 'string') {
        commit.hash = commit.hash.substring(0, 7);
      }

      if (typeof commit.subject === 'string') {
        let url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl;

        if (url) {
          url = `${url}/issues/`;
          // Issue URLs.
          commit.subject = commit.subject.replace(/#(\d+)/g, (_, issue) => {
            issues.push(issue);

            return `[#${issue}](${url}${issue})`;
          });
        }

        if (context.host) {
          // User URLs.
          commit.subject = commit.subject.replace(
            /\B@([\da-z](?:-?[\d/a-z]){0,38})/g,
            (_, username) => {
              if (username.includes('/')) {
                return `@${username}`;
              }

              return `[@${username}](${context.host}/${username})`;
            },
          );
        }
      }

      // remove references that already appear in the subject
      commit.references = commit.references.filter((reference) => {
        if (issues.indexOf(reference.issue) === -1) {
          return true;
        }

        return false;
      });

      return commit;
    },
  },
};
