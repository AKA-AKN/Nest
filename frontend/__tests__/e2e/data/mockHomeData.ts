export const mockHomeData = {
  data: {
    recentProjects: [
      {
        createdAt: '2025-03-05T13:49:06+00:00',
        key: 'project_1',
        leaders: ['Leader 1', 'Leader 2'],
        name: 'Project 1',
        openIssuesCount: 0,
        repositoriesCount: 1,
        type: 'documentation',
      },
      {
        createdAt: '2025-03-05T13:45:28+00:00',
        key: 'eks-goat',
        leaders: ['Leader 3', 'Leader 4'],
        name: 'OWASP EKS Goat',
        openIssuesCount: 0,
        repositoriesCount: 1,
        type: 'code',
      },
      {
        createdAt: '2025-03-03T16:23:05+00:00',
        key: 'dojo-shield',
        leaders: ['Leader 5', 'Leader 6'],
        name: 'OWASP Dojo Shield',
        openIssuesCount: 1,
        repositoriesCount: 1,
        type: 'documentation',
      },
    ],
    recentPosts: [
      {
        authorName: 'Author 1',
        authorImageUrl: 'https://owasp.org/assets/images/people/shruti_kulkarni.jpeg',
        publishedAt: '2025-03-06T07:00:00+00:00',
        title: 'Post 1',
        url: 'https://owasp.org/blog/2025/03/06/owasp-education-and-training-committee-update.html',
      },
      {
        authorName: 'Author 2',
        authorImageUrl: 'https://owasp.org/assets/images/people/leader_springett.png',
        publishedAt: '2025-02-24T07:00:00+00:00',
        title: 'Post 2',
        url: 'https://owasp.org/blog/2025/02/24/advisory-on-implementation-of-software-bill-of-materials-for-vulnerability-management.html',
      },
      {
        authorName: 'Author 3',
        authorImageUrl: 'https://owasp.org/assets/images/people/leader_bjoern.jpg',
        publishedAt: '2025-01-29T07:00:00+00:00',
        title: 'Author 3',
        url: 'https://owasp.org/blog/2025/01/29/juice-shop-leadership.html',
      },
    ],
    recentChapters: [
      {
        createdAt: '2025-03-18T01:03:09+00:00',
        key: 'chapter_1',
        leaders: ['Leader 1', 'Leader 3'],
        name: 'Chapter 1',
        suggestedLocation: 'Pune, Maharashtra, India',
      },
      {
        createdAt: '2025-03-13T00:01:01+00:00',
        key: 'chapter_2',
        leaders: ['Leader 1', 'Leader 2'],
        name: 'Chapter 2',
        suggestedLocation: 'Location 2',
      },
      {
        createdAt: '2025-02-25T02:04:57+00:00',
        key: 'chapter_3',
        leaders: ['Leader 1', 'Leader 2'],
        name: 'Chapter 3',
        suggestedLocation: 'Location 3',
      },
    ],
    topContributors: [
      {
        name: 'Contributor 1',
        login: 'contributor_1',
        avatarUrl: 'https://avatars.githubusercontent.com/u/3531020?v=4',
      },
      {
        name: 'Contributor 2',
        login: 'contributor_2',
        avatarUrl: 'https://avatars.githubusercontent.com/u/862914?v=4',
      },
      {
        name: 'Contributor 3',
        login: 'contributor_3',
        avatarUrl: 'https://avatars.githubusercontent.com/u/103866?v=4',
      },
    ],
    recentIssues: [
      {
        createdAt: '2025-03-20T14:03:10+00:00',
        title: 'Issue 1',
        repositoryName: 'Dependency-Track',
        url: 'https://github.com/DependencyTrack/hyades/issues/1724',
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/5693141?v=4',
          login: 'user1',
          name: 'Niklas',
        },
      },
      {
        createdAt: '2025-03-20T10:30:33+00:00',
        title: 'Issue 2',
        repositoryName: 'BLT',
        url: 'https://github.com/OWASP-BLT/BLT/issues/4013',
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/24620264?v=4',
          login: 'bug-reporter-bot',
          name: '',
        },
      },
      {
        createdAt: '2025-03-20T09:36:39+00:00',
        title: 'Troubleshooting the OWASP Dependency-Check Scanner',
        repositoryName: 'devguard',
        url: 'https://github.com/l3montree-dev/devguard/issues/336',
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/38261809?v=4',
          login: 'user2',
          name: 'Tim Bastin',
        },
      },
    ],
    recentReleases: [
      {
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/in/15368?v=4',
          login: 'github-actions[bot]',
          name: '',
        },
        name: 'Release 1',
        publishedAt: '2025-03-19T13:51:35+00:00',
        repositoryName: 'repo-1',
        tagName: 'v2.1.0',
        url: 'https://github.com/CycloneDX/cyclonedx-node-npm/releases/tag/v2.1.0',
      },
      {
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/2201626?v=4',
          login: 'arkid15r',
          name: 'Arkadii Yakovets',
        },
        name: 'Release 2',
        publishedAt: '2025-03-20T01:41:36+00:00',
        repositoryName: 'Nest',
        tagName: '0.1.25',
        url: 'https://github.com/OWASP/Nest/releases/tag/0.1.25',
      },
      {
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/13718901?v=4',
          login: 'J12934',
          name: 'author 3',
        },
        name: 'v4.14.0',
        publishedAt: '2025-03-18T12:24:40+00:00',
        repositoryName: 'secureCodeBox',
        tagName: 'v4.14.0',
        url: 'https://github.com/secureCodeBox/secureCodeBox/releases/tag/v4.14.0',
      },
    ],
    recentMilestones: [
      {
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/33333?v=4',
          login: 'milestone-author1',
          name: 'Milestone Author 1',
        },
        title: 'v2.0.0 Release',
        openIssuesCount: 5,
        closedIssuesCount: 15,
        repositoryName: 'Home Repo One',
        organizationName: 'OWASP',
        createdAt: '2025-03-01T10:00:00Z',
        url: 'https://github.com/OWASP/repo-one/milestone/1',
      },
    ],
    sponsors: [
      {
        imageUrl:
          'https://raw.githubusercontent.com/OWASP/owasp.github.io/main/assets/images/corp-member-logo/InfoSecMap-logo-small.png',
        name: 'InfoSecMap',
        sponsorType: 'DIAMOND',
        url: 'https://infosecmap.com',
      },
      {
        imageUrl:
          'https://raw.githubusercontent.com/OWASP/owasp.github.io/main/assets/images/corp-member-logo/Zimperiumlogo_300x90px.jpeg',
        name: 'Sponsor 2',
        sponsorType: 'GOLD',
        url: 'https://www.zimperium.com',
      },
      {
        imageUrl:
          'https://raw.githubusercontent.com/OWASP/owasp.github.io/main/assets/images/corp-member-logo/Salt_Security.png',
        name: 'Salt Security',
        sponsorType: 'SILVER',
        url: 'https://salt.security',
      },
    ],
    statsOverview: {
      activeChaptersStats: 280,
      activeProjectsStats: 250,
      contributorsStats: 11400,
      countriesStats: 90,
      slackWorkspaceStats: 35800,
    },
    upcomingEvents: [
      {
        category: 'APPSEC_DAYS',
        endDate: '2025-04-06',
        key: 'event_1',
        name: 'Event 1',
        startDate: '2025-04-05',
        summary:
          'The OWASP Boston Application Security Conference 2025 will take place on April 5, 2025. This event is organized by the Boston chapter of OWASP and features presenters and workshops. The focus will be on the latest trends in application security. It is an opportunity for attendees to learn and engage with experts in the field.',
        suggestedLocation: 'Boston, USA',
        url: 'https://basconf.org',
      },
      {
        category: 'PARTNER',
        endDate: '2025-05-23',
        key: 'event_2',
        name: 'Event 2',
        startDate: '2025-05-19',
        summary:
          'The github 2025 event will take place in Oslo from May 19 to May 23, 2025. Attendees can find discounted tickets by using the provided link. This event will focus on various topics related to technology and development. It promises to be an informative experience for those interested in these fields.',
        suggestedLocation: 'Oslo, Norway',
        url: 'https://event.checkin.no/82562/ndc-oslo-2025?action=campaignInvite&campaignInviteHash=ZGF3bi5haXRrZW5Ab3dhc3AuY29t&campaignInviteId=4927',
      },
      {
        category: 'GLOBAL',
        endDate: '2025-05-30',
        key: 'event_3',
        name: 'Event 3',
        startDate: '2025-05-26',
        summary:
          'The OWASP Global AppSec EU 2025 event will take place from May 26 to May 30, 2025. The location for this event has not been specified in the information provided. This event focuses on application security and brings together professionals from around the world. Participants will have the opportunity to learn and share knowledge about improving security in software development.',
        suggestedLocation: 'Barcelona, Spain',
        url: 'https://owasp.glueup.com/event/owasp-global-appsec-eu-2025-123983',
      },
    ],
  },
}
