import { colors } from '@wezoa-ui/tokens'
import { getContrast } from 'polished'
import '../styles/tokens-grid.css'

interface TokenGridProps {
  tokens: Record<string, string>
  hasRemValues?: boolean;
}

export function TokensGrid({ tokens, hasRemValues = false }: TokenGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValues && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValues && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}