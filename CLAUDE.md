# Project Notes

## Video Hosting

The video files (video1.mp4, video2.mp4, video3.mp4) are **not stored in GitHub** due to file size limits. They are:

- Stored locally in the project folder
- Deployed directly to **Vercel** when running `vercel --prod`
- Listed in `.gitignore` to prevent accidentally committing them

### If videos need to be updated:
1. Replace the video file(s) in the local project folder
2. Run `vercel --prod` to deploy the updated videos

### Current videos:
- `video1.mp4` - Musa (201.5K views)
- `video2.mp4` - OXA Restaurant Review (42.3K views)
- `video3.mp4` - Lifestyle - Day at East High School (12.3K views)

## Deployment

- **GitHub repo**: https://github.com/Danielagzba/UGCportfolio
- **Live site**: https://ugcportfolio-gray.vercel.app

To deploy changes:
```bash
vercel --prod
```
