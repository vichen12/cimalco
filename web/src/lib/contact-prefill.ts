type ContactPrefillParams = {
  line: string;
  group?: string;
  item?: string;
  message?: string;
};

export function buildContactHref({
  line,
  group,
  item,
  message,
}: ContactPrefillParams) {
  const params = new URLSearchParams();

  params.set("line", line);

  if (group) {
    params.set("group", group);
  }

  if (item) {
    params.set("item", item);
  }

  params.set(
    "message",
    message ??
      `Hola, quiero consultar por ${item ?? group ?? line} dentro de ${line}.`,
  );

  return `/contacto?${params.toString()}#contacto`;
}
