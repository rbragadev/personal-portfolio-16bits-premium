import { GameShell } from '../components/layout/GameShell';
import { MilestoneCard } from '../components/portfolio/MilestoneCard';
import { QuestCard } from '../components/portfolio/QuestCard';
import { TimelineRow } from '../components/portfolio/TimelineRow';
import { FramedArt } from '../components/ui/FramedArt';
import { Icon } from '../components/ui/Icon';
import { PixelLink } from '../components/ui/PixelButton';
import { backgrounds } from '../config/assets';
import { useContent } from '../content';

/** Screen 03 — the whole arc: how it started, and what it became. */
export function JourneyPage() {
  const { journeyScreen, questLogScreen } = useContent();
  const { timeline } = journeyScreen;
  const { experiences } = questLogScreen;
  // The first quest in the list is the one the timeline calls out as the start.
  const firstQuestId = timeline.find((entry) => entry.kind === 'quest')?.id;

  return (
    <GameShell background={<FramedArt asset={backgrounds.journey} />}>
      <header className="cq-enter max-w-2xl">
        <h2 className="font-display text-2xl leading-tight text-ink cq-pixel-text sm:text-3xl">
          {journeyScreen.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{journeyScreen.intro}</p>
      </header>

      <div className="relative mt-10">
        {/* One continuous rail behind every row — left on mobile, in the
            gutter on desktop. The offsets match TimelineRow's grid columns. */}
        <span
          className="absolute inset-y-0 left-5 w-px border-l border-dashed border-outline/70 lg:left-[9.25rem]"
          aria-hidden
        />

        <ol>
          {timeline.map((entry, index) => {
            const last = index === timeline.length - 1;
            const delay = index * 60;

            if (entry.kind === 'milestone') {
              return (
                <TimelineRow
                  key={entry.id}
                  when={entry.when}
                  delayMs={delay}
                  last={last}
                  node={
                    <span
                      className="relative mt-4 size-2.5 rotate-45 border border-outline bg-bg"
                      aria-hidden
                    />
                  }
                >
                  <MilestoneCard milestone={entry} />
                </TimelineRow>
              );
            }

            const experience = experiences.find((item) => item.id === entry.id);
            if (!experience) return null;

            const isCurrent = experience.status === 'in-progress';
            const badge = isCurrent
              ? journeyScreen.currentQuestLabel
              : entry.id === firstQuestId
                ? journeyScreen.firstQuestLabel
                : undefined;

            return (
              <TimelineRow
                key={entry.id}
                when={experience.years}
                delayMs={delay}
                last={last}
                node={
                  <span
                    className={`relative mt-5 size-4 border-2 ${
                      isCurrent ? 'border-gold bg-gold' : 'border-outline bg-surface-lowest'
                    }`}
                    aria-hidden
                  />
                }
              >
                <QuestCard experience={experience} badge={badge} />
              </TimelineRow>
            );
          })}
        </ol>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <PixelLink to="/quests" variant="ghost">
          <Icon name="clipboard" className="size-3" />
          Full quest log
        </PixelLink>
        <PixelLink to="/" variant="ghost">
          <Icon name="play" className="size-3" />
          {journeyScreen.backToStartLabel}
        </PixelLink>
      </div>
    </GameShell>
  );
}
