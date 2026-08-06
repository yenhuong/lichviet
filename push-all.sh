#!/usr/bin/env bash
#
# push-all.sh — Commit & đẩy code lên CẢ HAI repo cùng lúc
#   - origin: LichVietAI/LVAI-Design (team) + yenhuong/lichviet (cá nhân)
#
# Cách dùng:
#   ./push-all.sh "Mô tả thay đổi"     # add tất cả, commit, push cả 2 repo
#   ./push-all.sh                       # nếu đã commit sẵn, chỉ push cả 2 repo
#
set -euo pipefail

cd "$(dirname "$0")"

# Xác nhận đang ở đúng repo có cấu hình push kép
PUSH_COUNT=$(git remote get-url --push --all origin | wc -l | tr -d ' ')
echo "==> Sẽ đẩy lên $PUSH_COUNT repo:"
git remote get-url --push --all origin | sed 's/^/     - /'
echo

MSG="${1:-}"

if [[ -n "$MSG" ]]; then
  if [[ -n "$(git status --porcelain)" ]]; then
    echo "==> Đang stage & commit thay đổi..."
    git add -A
    git commit -m "$MSG"
  else
    echo "==> Không có thay đổi nào để commit (bỏ qua commit)."
  fi
else
  if [[ -n "$(git status --porcelain)" ]]; then
    echo "!! Có thay đổi chưa commit nhưng bạn không truyền message."
    echo "   Dùng: ./push-all.sh \"Mô tả thay đổi\""
    exit 1
  fi
fi

BRANCH=$(git branch --show-current)
echo "==> Đẩy nhánh '$BRANCH' lên cả hai repo..."
git push origin "$BRANCH"

echo
echo "✅ Xong. Đã đồng bộ lên cả 2 repo."
