export interface GitHubIssue {
  id: number;
  url: string;
  title: string;
  body: string;
  user: IssueAuthor;
  created_at: string;
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
