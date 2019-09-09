export interface GitHubIssue {
  id: number;
  url: string;
  body: string;
  user: IssueAuthor;
}

export interface IssueAuthor {
  login: string;
  avatar_url: string;
  url: string;
}

export interface FetchGitHubIssuesRes {
    total_count: number;
    items: GitHubIssue[];
}
